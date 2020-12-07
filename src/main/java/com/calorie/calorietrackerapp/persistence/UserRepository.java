package com.calorie.calorietrackerapp.persistence;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends CrudRepository<UserRecord,String>{
    @Transactional
    @Modifying
    @Query("UPDATE UserRecord u set u.userAge=?2 , u.userGender=?3 , u.userAddress=?4 , u.userName=?5 , u.userPassword=?6 , u.userEmail=?7 , u.userRole=?8 where u.userId=?1")
    void updateUserData(String userId, int userAge, String userGender, String userAddress, String userName, String userPassword, String userEmail, String userRole);
    
    public UserRecord findByUserName(String userName);
    
}
