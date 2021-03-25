package com.calorie.calorietrackerapp.security;

import javax.validation.Valid;

import com.calorie.calorietrackerapp.persistence.CrmUser;
import com.calorie.calorietrackerapp.persistence.UserRecord;
import com.calorie.calorietrackerapp.persistence.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service("customUserDetailsService")
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    @Autowired
	private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserRecord user = userRepository.findByUserName(username);
        log.info("Found user: {}",user);
        if (null == user) {
            throw new UsernameNotFoundException("No user present with username: " + username);
        } else {
            return new CustomUserDetails(user);
        }
    }

    public void save(@Valid CrmUser user) {
        log.info("Saving {}",user);
        userRepository
                .save(UserRecord.builder().userAge(Integer.parseInt(user.getUserAge()))
                        .userAddress(user.getUserAddress()).userEmail(user.getEmail()).userPassword(passwordEncoder.encode(user.getPassword()))
                        .userRole("ADMIN").userName(user.getUserName()).userGender(user.getUserGender()).build())
                .getUserId();
    }

    public UserRecord findUserByUsername(String userName) {
        return userRepository.findByUserName(userName);
    }
}
