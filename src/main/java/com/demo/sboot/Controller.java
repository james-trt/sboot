package com.demo.sboot;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created on 10/05/16.
 */
@RestController
@RequestMapping("/api")
public class Controller {


    @RequestMapping(value="/version",  method = RequestMethod.GET)
    public ResponseEntity<?> getVersion(){
        return ResponseEntity.status(HttpStatus.OK).body("1.0.1");
    }
}
