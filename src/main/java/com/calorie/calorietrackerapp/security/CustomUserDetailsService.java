package com.calorie.calorietrackerapp.security;

import com.calorie.calorietrackerapp.persistence.UserRecord;
import com.calorie.calorietrackerapp.persistence.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;


@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserRecord user = userRepository.findByUserName(username);
        
        if (null == user) {

            throw new UsernameNotFoundException("No user present with username: " + username);
        } else {
            return new CustomUserDetails(user);
        }
    }
}
