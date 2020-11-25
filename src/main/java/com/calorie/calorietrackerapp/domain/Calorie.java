package com.calorie.calorietrackerapp.domain;

import java.util.Date;

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
public class Calorie {
    public String userId;
    public String calorieId;
    public int calorieCount;
    public String calorieFoodType;
    public Date date;
}

