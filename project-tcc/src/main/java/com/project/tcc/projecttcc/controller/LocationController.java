package com.project.tcc.projecttcc.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tcc.projecttcc.services.LocationService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/location")

public class LocationController {
    
    final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    
}