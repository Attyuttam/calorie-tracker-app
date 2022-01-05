package com.calorie.calorietrackerapp.domain;

import java.util.List;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserCalorieDetails {
    public String userId;
    public String userName;
    public List<Calorie> calorieEntries;
}
