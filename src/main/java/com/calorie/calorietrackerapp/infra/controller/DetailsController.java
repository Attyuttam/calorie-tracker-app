package com.calorie.calorietrackerapp.infra.controller;

import java.util.HashMap;
import java.util.List;

import com.calorie.calorietrackerapp.domain.Calorie;
import com.calorie.calorietrackerapp.domain.User;
import com.calorie.calorietrackerapp.domain.UserCalorieDetails;
import com.calorie.calorietrackerapp.persistence.UserCalorieDetailsProvider;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
    public HashMap<String, String> updateUserData(@PathVariable String userId, @RequestBody User user) {
        user.setUserId(userId);
        String responseString = userCalorieDetailsProvider.updateUserData(user);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }
    @PostMapping("/update/calorie/{calorieId}")
    public HashMap<String, String> updateCalorieData(@PathVariable String calorieId, @RequestBody Calorie calorie) {
        calorie.setCalorieId(calorieId);
        String responseString = userCalorieDetailsProvider.updateCalorieData(calorie);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }
    @PostMapping("/calorie")
    public HashMap<String, String> saveCalorieData(@RequestBody Calorie calorie) {
        String responseString = userCalorieDetailsProvider.saveCalorieData(calorie);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }
    @DeleteMapping("/delete/calorie/{calorieId}")
    public HashMap<String, String> deleteCalorieData(@PathVariable String calorieId){
        String responseString = userCalorieDetailsProvider.deleteCalorieData(calorieId);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }
    @DeleteMapping("/delete/user/{userId}")
    public HashMap<String, String> deleteUserData(@PathVariable String userId){
        String responseString = userCalorieDetailsProvider.deleteUserData(userId);
        HashMap<String, String> map = new HashMap<>();
        map.put("responseString", responseString);
        return map;
    }
}
