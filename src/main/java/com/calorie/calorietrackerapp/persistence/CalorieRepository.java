package com.calorie.calorietrackerapp.persistence;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CalorieRepository extends CrudRepository<CalorieRecord,String>{

    @Transactional
    @Modifying
    @Query("UPDATE CalorieRecord c set  c.calorieCount=?2 , c.calorieFoodType=?3 where c.calorieId=?1")
    void updateCalorieData(String calorieId,  int calorieCount, String calorieFoodType);
    
    @Transactional
    @Modifying
    @Query("Delete from CalorieRecord c where  c.calorieId=?1")
    void deleteCalorieData(String calorieId);
}
