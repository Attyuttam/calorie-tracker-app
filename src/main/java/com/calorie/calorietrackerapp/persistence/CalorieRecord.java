package com.calorie.calorietrackerapp.persistence;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "CALORIE_DATA")
public class CalorieRecord implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = -1650011816740052076L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "CALORIE_ID")
    private String calorieId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ID")
    private UserRecord user;

    @Column(name = "CALORIE_COUNT")
    private int calorieCount;

    @Column(name = "CALORIE_UPDATED_DT")
    private Date calorieUpdatedDate;


    @Column(name = "CALORIE_FOOD_TYPE")
    private String calorieFoodType;

}
