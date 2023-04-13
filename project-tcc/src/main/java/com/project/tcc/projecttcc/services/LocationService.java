package com.project.tcc.projecttcc.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.project.tcc.projecttcc.model.LocationModel;
import com.project.tcc.projecttcc.repositories.LocationRepository;

@Service
public class LocationService {
    
    final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }
    
    @Transactional //"@Transactional" is a Java annotation that is used to manage transactions in a Spring-based application. The annotation marks a method, or a class, as transactional, which means that if an error occurs during the execution of any database-related operations within the method, the whole transaction will be rolled back to its previous state. This ensures database consistency and helps to prevent data corruption.
    public LocationModel save(LocationModel locationModel){
        return locationRepository.save(locationModel);
    }

    public List<LocationModel> findAll() {
        return locationRepository.findAll();
    }

    public Optional<LocationModel> findById(String idLocation) {
        return locationRepository.findById(idLocation);
    }
    @Transactional
    public void delete(LocationModel locationModel) {
        locationRepository.delete(locationModel);
    }
}
