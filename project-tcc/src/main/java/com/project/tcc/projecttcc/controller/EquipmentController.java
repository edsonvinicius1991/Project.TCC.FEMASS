package com.project.tcc.projecttcc.controller;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
}
