package com.calorie.calorietrackerapp.persistence;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.calorie.calorietrackerapp.domain.Calorie;
import com.calorie.calorietrackerapp.domain.User;
import com.calorie.calorietrackerapp.domain.UserCalorieDetails;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserCalorieDetailsProvider {
    private final UserRepository userRepository;
    private final CalorieRepository calorieRepository;

    public List<Calorie> getCalorieDetails() {
        List<CalorieRecord> calorieRecords = (List<CalorieRecord>) calorieRepository.findAll();
        List<Calorie> calorieList = new ArrayList<>();
        calorieRecords.forEach(calorieRecord -> {
            log.info("Date in record : " + calorieRecord.getCalorieUpdatedDate());
            calorieList.add(Calorie.builder().userId(calorieRecord.getUser().getUserId())
                    .calorieId(calorieRecord.getCalorieId()).calorieCount(calorieRecord.getCalorieCount())
                    .calorieFoodType(calorieRecord.getCalorieFoodType())
                    .date(parseLocalDate(toDate(calorieRecord.getCalorieUpdatedDate()))).build());
        });
        return calorieList;
    }

    public List<User> getUserDetails() {
        List<UserRecord> userRecords = (List<UserRecord>) userRepository.findAll();
        List<User> userList = new ArrayList<>();
        userRecords.forEach(userRecord -> {
            userList.add(User.builder().userId(userRecord.getUserId()).userName(userRecord.getUserName())
                    .userAddress(userRecord.getUserAddress()).userAge(userRecord.getUserAge())
                    .userGender(userRecord.getUserGender()).build());
        });
        return userList;
    }

    public UserCalorieDetails getUserCalorieDetailsByDate(String userId, String date) {
        Optional<UserRecord> userRecord = userRepository.findById(userId);
        if (userRecord.isPresent()) {
            List<Calorie> calorieList = new ArrayList<>();
            userRecord.get().getCalorieDetails().stream().filter(
                    calorieRecord -> toDate(calorieRecord.getCalorieUpdatedDate()).equals(toDate(parseLocalDate(date))))
                    .forEach(calorieRecord -> {
                        calorieList.add(Calorie.builder().calorieId(calorieRecord.getCalorieId())
                                .userId(calorieRecord.getUser().getUserId())
                                .calorieCount(calorieRecord.getCalorieCount())
                                .calorieFoodType(calorieRecord.getCalorieFoodType())
                                .date(calorieRecord.getCalorieUpdatedDate()).build());
                    });

            return UserCalorieDetails.builder().userId(userRecord.get().getUserId())
                    .userName(userRecord.get().getUserName()).calorieEntries(calorieList).build();
        }
        return UserCalorieDetails.builder().build();
    }

    private String toDate(Date dateTimestamp) {
        return new SimpleDateFormat("yyyy-MM-dd").format(dateTimestamp);
    }

    private Date parseLocalDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    public String saveUserData(User user) {
        String userId = "";
        try {
            log.info("name: "+user.getUserName());
            log.info("age: "+user.getUserAge());
            log.info("address: "+user.getUserAddress());
            log.info("gender: "+user.getUserGender());
            userId = userRepository
                    .save(UserRecord.builder().userAge(user.getUserAge()).userAddress(user.getUserAddress())
                            .userName(user.getUserName()).userGender(user.getUserGender()).build())
                    .getUserId();
        } catch (Exception e) {
            throw new RuntimeException("Could not save user data because of : " + e.getMessage());
        }
        return "User saved successfully with id=" + userId;
    }

    public String saveCalorieData(Calorie calorie) {
        try {
            if (!userRepository.findById(calorie.getUserId()).isPresent()) {
                throw new RuntimeException("Invalid calorie entry, no corresponding user present");
            }

            calorieRepository.save(CalorieRecord.builder().calorieCount(calorie.getCalorieCount())
                    .calorieFoodType(calorie.getCalorieFoodType())
                    .calorieUpdatedDate(parseLocalDate(new SimpleDateFormat("yyyy-MM-dd").format(new Date())))
                    .user(userRepository.findById(calorie.getUserId()).get()).build());
        } catch (Exception e) {
            throw new RuntimeException("Could not save calorie data because of : " + e.getMessage());
        }
        return "Calorie data saved successfully";
    }

    public User getSingleUser(String userId) {
        Optional<UserRecord> userRecord = userRepository.findById(userId);
        if (userRecord.isPresent()) {
            return User.builder().userId(userRecord.get().getUserId()).userName(userRecord.get().getUserName())
                    .userAddress(userRecord.get().getUserAddress()).userAge(userRecord.get().getUserAge())
                    .userGender(userRecord.get().getUserGender()).build();
        }
        return User.builder().build();
    }

    public Calorie getSingleCalorie(String calorieId) {
        Optional<CalorieRecord> calorieRecord = calorieRepository.findById(calorieId);
        if (calorieRecord.isPresent()) {
            return Calorie.builder().calorieCount(calorieRecord.get().getCalorieCount())
                    .calorieFoodType(calorieRecord.get().getCalorieFoodType())
                    .calorieId(calorieRecord.get().getCalorieId()).date(calorieRecord.get().getCalorieUpdatedDate())
                    .userId(calorieRecord.get().getUser().getUserId()).build();
        }
        return Calorie.builder().build();
    }

    public String updateUserData(User user) {
        Optional<UserRecord> userRecord = userRepository.findById(user.getUserId());
        if (userRecord.isPresent()) {
            userRepository.updateUserData(user.getUserId(), user.getUserAge(), user.getUserGender(),
                    user.getUserAddress(), user.getUserName());

        }
        return "User does not exist in our database";
    }
}
