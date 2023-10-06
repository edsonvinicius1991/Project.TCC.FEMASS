package com.project.tcc.projecttcc.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
import com.project.tcc.projecttcc.model.RespostaModel;
import com.project.tcc.projecttcc.services.EquipmentService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600) //CORS is a mechanism that allows a server to specify who can access its resources. The snippet you provided sets the origin to allow any domain (the "*" wildcard)
@RequestMapping ("/equipment")

public class EquipmentController {
    @Autowired
    private RespostaModel resposta;
    
    final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }
    
    
    @PostMapping ("/add")
    //public ResponseEntity<?> saveEquipment(@RequestBody @Valid EquipmentDto equipmentDto){  *Validação pelo spring
    public ResponseEntity<?> saveEquipment(@RequestBody EquipmentDto equipmentDto){    
        var equipmentModel = new EquipmentModel();
        BeanUtils.copyProperties(equipmentDto, equipmentModel);
        
        if(equipmentDto.getAssetId().equals("")){
            resposta.setMessage("AssetID is required.");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        
        }else if(equipmentDto.getDescription().equals("")){
            resposta.setMessage("Description is required.");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);

        }else
            return ResponseEntity.status(HttpStatus.CREATED).body(((Object) equipmentService.save(equipmentModel)));        

    }
    /* {
    "assetId": "14875391",
    "description": "4462EA",
    "partNumber": "F131463000",
    "dueDate": "2022-12-25",
    
    "container": {
        "idContainer": "TB301"
    },
    "location":{
        "idLocation": "1"
    }
    }*/
    
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
        resposta.setMessage("Equipment was deleted");
        equipmentService.delete(equipmentModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body(resposta);

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