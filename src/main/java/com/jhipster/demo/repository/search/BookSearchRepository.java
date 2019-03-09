package com.jhipster.demo.repository.search;

import com.jhipster.demo.domain.Book;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Book entity.
 */
public interface BookSearchRepository extends ElasticsearchRepository<Book, Long> {
}
