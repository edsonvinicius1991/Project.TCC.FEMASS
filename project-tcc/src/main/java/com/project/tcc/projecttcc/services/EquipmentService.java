package com.project.tcc.projecttcc.services;

import org.springframework.stereotype.Service;
import com.project.tcc.projecttcc.repositories.EquipmentRepository;

@Service
public class EquipmentService {

    final EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    
}
