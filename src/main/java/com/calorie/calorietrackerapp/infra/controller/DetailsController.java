package com.calorie.calorietrackerapp.infra.controller;

import java.util.List;
import java.util.HashMap;

import com.calorie.calorietrackerapp.domain.Calorie;
import com.calorie.calorietrackerapp.domain.User;
import com.calorie.calorietrackerapp.domain.UserCalorieDetails;
import com.calorie.calorietrackerapp.persistence.UserCalorieDetailsProvider;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@Component
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/v1")
public class DetailsController {

    private UserCalorieDetailsProvider userCalorieDetailsProvider;

    @GetMapping("/calories")
    public List<Calorie> getCalorieDetails() {
        return userCalorieDetailsProvider.getCalorieDetails();
    }

    @GetMapping("/users")
    public List<User> getUserDetails() {
        return userCalorieDetailsProvider.getUserDetails();
    }

    @GetMapping("/user/{userId}")
    public User getSingleUser(@PathVariable String userId) {
        return userCalorieDetailsProvider.getSingleUser(userId);
    }

    @GetMapping("/calorie/{calorieId}")
    public Calorie getSingleCalore(@RequestParam String calorieId) {
        return userCalorieDetailsProvider.getSingleCalorie(calorieId);
    }

    @GetMapping("/calorie/{userId}/{requestedDate}")
    public UserCalorieDetails getUserCalorieDetailsByDate(@PathVariable String userId,
            @PathVariable String requestedDate) {
        return userCalorieDetailsProvider.getUserCalorieDetailsByDate(userId, requestedDate);
    }

    @PostMapping("/user")
    public HashMap<String, String> saveUserData(@RequestBody User user) {
        String responseString = userCalorieDetailsProvider.saveUserData(user);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }

    @PostMapping("/update/user/{userId}")
    public String updateUserData(@RequestBody User user) {
        return userCalorieDetailsProvider.updateUserData(user);
    }

    @PostMapping("/calorie")
    public HashMap<String, String> saveCalorieData(@RequestBody Calorie calorie) {
        String responseString = userCalorieDetailsProvider.saveCalorieData(calorie);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }
}
