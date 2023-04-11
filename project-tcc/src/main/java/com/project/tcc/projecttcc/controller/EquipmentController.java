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

import com.project.tcc.projecttcc.dtos.EquipmentDto;
import com.project.tcc.projecttcc.model.EquipmentModel;
import com.project.tcc.projecttcc.services.EquipmentService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600) //CORS is a mechanism that allows a server to specify who can access its resources. The snippet you provided sets the origin to allow any domain (the "*" wildcard)
@RequestMapping ("/equipment")

public class EquipmentController {
    
    final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }
    
    
    @PostMapping ("/add")
    public ResponseEntity<Object> saveEquipment(@RequestBody @Valid EquipmentDto equipmentDto){

        var equipmentModel = new EquipmentModel();
        BeanUtils.copyProperties(equipmentDto, equipmentModel);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(((Object) equipmentService.save(equipmentModel)));

    }
    
    @GetMapping
    public ResponseEntity<List<EquipmentModel>> getAllEquipment(){
        return ResponseEntity.status(HttpStatus.OK).body(equipmentService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getIdEquipment(@PathVariable(value = "id")String assetId){
        Optional<EquipmentModel> equipmentModelOptional = equipmentService.findById(assetId);
        if(!equipmentModelOptional.isPresent()){ //Case: If id not found!
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Equipment not found.");
        }
        
        return ResponseEntity.status(HttpStatus.OK).body(equipmentModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteEquipments(@PathVariable(value = "id") String assetId){
        Optional<EquipmentModel> equipmentModelOptional = equipmentService.findById(assetId);
        if(!equipmentModelOptional.isPresent()){ //Case: If id not found!
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Equipment not found.");
        }
        
        equipmentService.delete(equipmentModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Equipment deleted sucessfully.");

    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateEquipments(   @PathVariable(value = "id") String assetId,
                                                    @RequestBody @Valid EquipmentDto equipmentDto){
        Optional<EquipmentModel> equipmentModelOptional = equipmentService.findById(assetId);
        if(!equipmentModelOptional.isPresent()){ //Se não estiver presente
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Equipment not found.");
        }
        var equipmentModel = new EquipmentModel();
        BeanUtils.copyProperties(equipmentDto, equipmentModel);
        equipmentModel.setAssetId(equipmentModelOptional.get().getAssetId());
        
        return ResponseEntity.status(HttpStatus.OK).body(equipmentService.save(equipmentModel));    
    }
}