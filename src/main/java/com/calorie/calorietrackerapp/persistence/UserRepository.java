package com.calorie.calorietrackerapp.persistence;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserRecord,String>{

    @Query("update UserRecord u set u.userAge=$2 , u.userGender=$3 , u.userAddress=$4 , u.userName=$5 where u.userId=$1")
	void updateUserData(String userId, int userAge, String userGender, String userAddress, String userName);
    
}
