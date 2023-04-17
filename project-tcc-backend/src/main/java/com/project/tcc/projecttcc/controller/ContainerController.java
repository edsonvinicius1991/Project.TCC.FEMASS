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

import com.project.tcc.projecttcc.dtos.ContainerDto;
import com.project.tcc.projecttcc.model.ContainerModel;
import com.project.tcc.projecttcc.services.ContainerService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/container")

public class ContainerController {
    
    final ContainerService containerService;

    public ContainerController(ContainerService containerService) {
        this.containerService = containerService;
    }

    @PostMapping ("/add")
    public ResponseEntity<Object> saveContainer(@RequestBody @Valid ContainerDto containerDto){

        var containerModel = new ContainerModel();
        BeanUtils.copyProperties(containerDto, containerModel);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(((Object) containerService.save(containerModel)));

    }
    
    @GetMapping
    public ResponseEntity<List<ContainerModel>> getAllContainer(){
        return ResponseEntity.status(HttpStatus.OK).body(containerService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getIdContainer(@PathVariable(value = "id")String idContainer){
        Optional<ContainerModel> containerModelOptional = containerService.findById(idContainer);
        if(!containerModelOptional.isPresent()){ //Case: If id not found!
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Container not found.");
        }
        
        return ResponseEntity.status(HttpStatus.OK).body(containerModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteContainers(@PathVariable(value = "id") String idContainer){
        Optional<ContainerModel> containerModelOptional = containerService.findById(idContainer);
        if(!containerModelOptional.isPresent()){ //Case: If id not found!
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Container not found.");
        }
        
        containerService.delete(containerModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Container deleted sucessfully.");

    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateContainers(   @PathVariable(value = "id") String idContainer,
                                                    @RequestBody @Valid ContainerDto containerDto){
        Optional<ContainerModel> containerModelOptional = containerService.findById(idContainer);
        if(!containerModelOptional.isPresent()){ //Se não estiver presente
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Container not found.");
        }
        var containerModel = new ContainerModel();
        BeanUtils.copyProperties(containerDto, containerModel);
        containerModel.setIdContainer(containerModelOptional.get().getIdContainer());
        
        return ResponseEntity.status(HttpStatus.OK).body(containerService.save(containerModel));    
    }
}
