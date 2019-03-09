**JHISPTER**

**TYPE :** ? Which _type_ of application would you like to create?<br> `Monolithic application (recommended for simple projects)`<br>
**NAME :** ? What is the base name of your application? `JhipsterDemo`<br>
**PACKAGE :** ? What is your default Java package name? `com.jhipster.demo`<br>
**MONITOR :** ? Do you want to use the JHipster Registry to configure, monitor and scale your application? `Yes`<br>
**DB TYPE :** ? Which _type_ of database would you like to use? (relational)<br>
`(relational) SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)`<br>
**DB PROD :** ? Which _production_ database would you like to use? `PostgreSQL`<br>
**DB DEV :** ? Which _development_ database would you like to use? `H2 with in-memory persistence`<br>
**CACHE USE :** ? Do you want to use the Spring cache abstraction?<br>
`Yes, with the Ehcache implementation (local cache, for a single node)`<br>
**-** ? Do you want to use Hibernate 2nd level cache? `No`<br>
**BUILD :** ? Would you like to use Maven or Gradle for building the backend? `Maven`<br>
**TECHNOLOGIES :** ? Which other technologies would you like to use?<br>
`Search engine using Elasticsearch, WebSockets using Spring Websocket`<br>
**FRAMEWORK :** ? Which _Framework_ would you like to use for the client? `Angular`<br>
**STYLESHEET :** ? Would you like to enable _SASS_ stylesheet preprocessor? `Yes`<br>
**-** ? Would you like to enable internationalization support? `No`<br>
**TEST :** ? Besides JUnit and Jest, which testing frameworks would you like to use?<br>
**JHipster Market:** ? Would you like to install other generators from the JHipster Marketplace? `No`<br>

---

`yo jhipster : entity X` <br><br>
================ Author =================<br>
Fields<br>
name (String) required<br>
phone (String) required<br>
address (String) required<br>

? Do you want to add a relationship to another entity? `Yes`<br>
? What is the name of the other entity? `book`<br>
? What is the name of the relationship? `book`<br>
? What is the type of the relationship? `one-to-many`<br>
? What is the name of this relationship in the other entity? (author)

<br>
================= Book =================<br>
Fields <br>
title (String) required<br>
description (String)<br>
publicaitonDate (LocalDate) required<br>
price (Integer) required<br>

? Do you want to add a relationship to another entity? `Yes`<br>
? What is the name of the other entity? `author`<br>
? What is the name of the relationship? `author`<br>
? What is the type of the relationship? `many-to-one`<br>
? When you display this relationship on client-side, which field from 'author' do you want to use? This field will be displayed as a String, so it cannot be a Blob `name`<br>
? Do you want to add any validation rules to this relationship? (y/N) `N`<br><br>
https://www.youtube.com/watch?v=d1MEM8PdAzQ
