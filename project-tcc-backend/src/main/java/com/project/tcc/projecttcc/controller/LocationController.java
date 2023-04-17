package com.project.tcc.projecttcc.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tcc.projecttcc.dtos.LocationDto;
import com.project.tcc.projecttcc.model.LocationModel;
import com.project.tcc.projecttcc.services.LocationService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/location")

public class LocationController {
    
    final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @PostMapping ("/add")
    public ResponseEntity<Object> saveLocation(@RequestBody @Valid LocationDto locationDto){

        var locationModel = new LocationModel();
        BeanUtils.copyProperties(locationDto, locationModel);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(((Object) locationService.save(locationModel)));

    }
    
    @GetMapping
    public ResponseEntity<List<LocationModel>> getAllLocation(){
        return ResponseEntity.status(HttpStatus.OK).body(locationService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getIdLocation(@PathVariable(value = "id")String idLocation){
        Optional<LocationModel> locationModelOptional = locationService.findById(idLocation);
        if(!locationModelOptional.isPresent()){ //Case: If id not found!
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Location not found.");
        }
        
        return ResponseEntity.status(HttpStatus.OK).body(locationModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteLocations(@PathVariable(value = "id") String idLocation){
        Optional<LocationModel> locationModelOptional = locationService.findById(idLocation);
        if(!locationModelOptional.isPresent()){ //Case: If id not found!
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Location not found.");
        }
        
        locationService.delete(locationModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Location deleted sucessfully.");

    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateLocations(   @PathVariable(value = "id") String idLocation,
                                                    @RequestBody @Valid LocationDto locationDto){
        Optional<LocationModel> locationModelOptional = locationService.findById(idLocation);
        if(!locationModelOptional.isPresent()){ //Se não estiver presente
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Location not found.");
        }
        var locationModel = new LocationModel();
        BeanUtils.copyProperties(locationDto, locationModel);
        locationModel.setIdLocation(locationModelOptional.get().getIdLocation());
        
        return ResponseEntity.status(HttpStatus.OK).body(locationService.save(locationModel));    
    }
}
