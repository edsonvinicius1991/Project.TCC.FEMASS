package com.project.tcc.projecttcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.tcc.projecttcc.model.EquipmentModel;

@Repository
public interface EquipmentRepository extends JpaRepository<EquipmentModel, String> {
    

}
