package com.calorie.calorietrackerapp.persistence;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.calorie.calorietrackerapp.validation.FieldMatch;
import com.calorie.calorietrackerapp.validation.ValidEmail;

@FieldMatch.List({
		@FieldMatch(first = "password", second = "matchingPassword", message = "The password fields must match") })
public class CrmUser {

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String userName;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String userAge;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String userAddress;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String userGender;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String password;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String matchingPassword;

	@ValidEmail
	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String email;

	public CrmUser() {
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMatchingPassword() {
		return matchingPassword;
	}

	public void setMatchingPassword(String matchingPassword) {
		this.matchingPassword = matchingPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUserAge(String userAge) {
		this.userAge = userAge;
	}

	public String getUserAge() {
		return userAge;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public String getUserGender() {
		return userGender;
	}

	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}

}
