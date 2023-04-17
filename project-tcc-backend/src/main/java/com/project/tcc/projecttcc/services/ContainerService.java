package com.project.tcc.projecttcc.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.project.tcc.projecttcc.model.ContainerModel;
import com.project.tcc.projecttcc.repositories.ContainerRepository;


@Service
public class ContainerService {
    
    final ContainerRepository containerRepository;

    public ContainerService(ContainerRepository containerRepository) {
        this.containerRepository = containerRepository;
    }
    
    @Transactional //"@Transactional" is a Java annotation that is used to manage transactions in a Spring-based application. The annotation marks a method, or a class, as transactional, which means that if an error occurs during the execution of any database-related operations within the method, the whole transaction will be rolled back to its previous state. This ensures database consistency and helps to prevent data corruption.
    public ContainerModel save(ContainerModel containerModel){
        return containerRepository.save(containerModel);
    }

    public List<ContainerModel> findAll() {
        return containerRepository.findAll();
    }

    public Optional<ContainerModel> findById(String idContainer) {
        return containerRepository.findById(idContainer);
    }
    @Transactional
    public void delete(ContainerModel containerModel) {
        containerRepository.delete(containerModel);
    }
}
