package com.example.fooody.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @see org.springframework.security.config.annotation.SecurityConfigurer
 * @see <a href="https://spring.io/guides/gs/securing-web/">...</a>
 * @see <a href="https://docs.spring.io/spring-security/site/docs/3.2.0.RC2/apidocs/org/springframework/security/config/annotation/web/builders/HttpSecurity.html">...</a>
 *
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
            .antMatchers("/api").authenticated()
            .anyRequest().permitAll();
  }
  /*@Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
            .withUser("user").roles("USER").and()
            .withUser("admin").roles("ADMIN");
  }*/
}
