package com.jhipster.demo.repository.search;

import com.jhipster.demo.domain.Author;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Author entity.
 */
public interface AuthorSearchRepository extends ElasticsearchRepository<Author, Long> {
}
