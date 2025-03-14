package com.dscatalog.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dscatalog.dscatalog.entities.Category;
import com.dscatalog.dscatalog.entities.Product;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

	Product save(Product entity);

}
