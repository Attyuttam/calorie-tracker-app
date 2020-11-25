package com.calorie.calorietrackerapp.persistence;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalorieRepository extends CrudRepository<CalorieRecord,String>{
    
}
