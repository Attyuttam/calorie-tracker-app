package com.calorie.calorietrackerapp.domain;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    public String userId;
    public String userName;
    public String userAddress;
    public int userAge;
    public String userGender;
    public String userEmail;
    public String userPassword;
    public String userRole;
}
