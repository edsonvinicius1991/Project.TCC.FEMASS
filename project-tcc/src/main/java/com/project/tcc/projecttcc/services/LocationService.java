package com.project.tcc.projecttcc.services;

import org.springframework.stereotype.Service;
import com.project.tcc.projecttcc.repositories.LocationRepository;

@Service
public class LocationService {
    
    final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }
    
}
