package com.jhipster.demo.service;

import com.jhipster.demo.domain.Author;
import com.jhipster.demo.repository.AuthorRepository;
import com.jhipster.demo.repository.search.AuthorSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Author.
 */
@Service
@Transactional
public class AuthorService {

    private final Logger log = LoggerFactory.getLogger(AuthorService.class);

    private final AuthorRepository authorRepository;

    private final AuthorSearchRepository authorSearchRepository;

    public AuthorService(AuthorRepository authorRepository, AuthorSearchRepository authorSearchRepository) {
        this.authorRepository = authorRepository;
        this.authorSearchRepository = authorSearchRepository;
    }

    /**
     * Save a author.
     *
     * @param author the entity to save
     * @return the persisted entity
     */
    public Author save(Author author) {
        log.debug("Request to save Author : {}", author);
        Author result = authorRepository.save(author);
        authorSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the authors.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Author> findAll(Pageable pageable) {
        log.debug("Request to get all Authors");
        return authorRepository.findAll(pageable);
    }


    /**
     * Get one author by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<Author> findOne(Long id) {
        log.debug("Request to get Author : {}", id);
        return authorRepository.findById(id);
    }

    /**
     * Delete the author by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Author : {}", id);
        authorRepository.deleteById(id);
        authorSearchRepository.deleteById(id);
    }

    /**
     * Search for the author corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Author> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Authors for query {}", query);
        return authorSearchRepository.search(queryStringQuery(query), pageable);    }
}
