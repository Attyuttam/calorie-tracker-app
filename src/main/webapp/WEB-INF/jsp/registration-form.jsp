<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> <%@
taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Register New User Form</title>

    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Reference Bootstrap files -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <style>
      .error {
        color: red;
      }
      .panel-info > .custom-panel-heading {
        background: #343a40;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div>
      <h1 class="text-center display-4">Calorie Tracker Application</h1>
      <div
        id="loginbox"
        style="margin-top: 50px"
        class="mainbox col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-2"
      >
        <div class="panel panel-info">
          <div class="panel-heading custom-panel-heading">
            <div class="panel-title">Register New User</div>
          </div>

          <div style="padding-top: 30px" class="panel-body">
            <!-- Registration Form -->
            <form:form
              action="/register/processRegistrationForm"
              modelAttribute="crmUser"
              class="form-horizontal"
            >
              <!-- Place for messages: error, alert etc ... -->
              <div class="form-group">
                <div class="col-xs-15">
                  <div>
                    <!-- Check for registration error -->
                    <c:if test="${registrationError != null}">
                      <div class="alert alert-danger col-xs-offset-1 col-xs-10">
                        ${registrationError}
                      </div>
                    </c:if>
                  </div>
                </div>
              </div>

              <!-- User name -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <form:errors path="userName" cssClass="error" />
                <form:input
                  path="userName"
                  placeholder="username (*)"
                  class="form-control"
                />
              </div>

              <!-- Password -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-lock"></i
                ></span>
                <form:errors path="password" cssClass="error" />
                <form:password
                  path="password"
                  placeholder="password (*)"
                  class="form-control"
                />
              </div>

              <!-- Confirm Password -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-lock"></i
                ></span>
                <form:errors path="matchingPassword" cssClass="error" />
                <form:password
                  path="matchingPassword"
                  placeholder="confirm password (*)"
                  class="form-control"
                />
              </div>

              <!-- Age -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <form:errors path="userAge" cssClass="error" />
                <form:input
                  path="userAge"
                  placeholder="user age (*)"
                  class="form-control"
                />
              </div>

              <!-- Address -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <form:errors path="userAddress" cssClass="error" />
                <form:input
                  path="userAddress"
                  placeholder="user address (*)"
                  class="form-control"
                />
              </div>
              <!-- Gender -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <form:errors path="userGender" cssClass="error" />
                <form:input
                  path="userGender"
                  placeholder="user gender (*)"
                  class="form-control"
                />
              </div>

              <!-- Email -->
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <form:errors path="email" cssClass="error" />
                <form:input
                  path="email"
                  placeholder="email (*)"
                  class="form-control"
                />
              </div>

              <!-- Register Button -->
              <div style="margin-top: 10px" class="form-group">
                <div class="col-sm-6 controls">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form:form>
          </div>
        </div>
        <div>
          <a
            href="/showCustomLoginPage"
            class="btn btn-primary"
            role="button"
            aria-pressed="true"
          >
            Back to Login Page
          </a>
        </div>
        <br />
      </div>
    </div>
  </body>
</html>
