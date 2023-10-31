package com.project.tcc.projecttcc.services;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.tcc.projecttcc.model.EquipmentModel;
import com.project.tcc.projecttcc.repositories.EquipmentRepository;


@Service
public class EquipmentService {

    @Autowired
    final EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    
    @Transactional //"@Transactional" is a Java annotation that is used to manage transactions in a Spring-based application. The annotation marks a method, or a class, as transactional, which means that if an error occurs during the execution of any database-related operations within the method, the whole transaction will be rolled back to its previous state. This ensures database consistency and helps to prevent data corruption.
    public EquipmentModel save(EquipmentModel equipmentModel){
        return equipmentRepository.save(equipmentModel);
    }

    public List<EquipmentModel> findAll() {
        return equipmentRepository.findAll();
    }

    public Optional<EquipmentModel> findById(String assetId) {
        return equipmentRepository.findById(assetId);
    }
    @Transactional
    public void delete(EquipmentModel equipmentModel) {
        equipmentRepository.delete(equipmentModel);
    }
}
