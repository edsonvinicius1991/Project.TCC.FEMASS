package com.project.tcc.projecttcc.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tcc.projecttcc.services.EquipmentService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/equipment")

public class EquipmentController {
    
    final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    
}
