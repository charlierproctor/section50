## SQL

- `INSERT INTO`: Insert certain values into a table

	```sql
	# insert into table the row of values
	INSERT INTO table VALUES values 

	# insert into table under columns col1 & col2, val1 & val2
	INSERT INTO table (col1, col2) VALUES (val1, val2) 
	```

- `SELECT`: Select values to view

	```sql
	# select a column from table to compare/ view
	SELECT col FROM table WHERE col = "identifier" 

	# select all columns from a table
	SELECT * FROM table 
	```

- `UPDATE`: Update data in a database table

	```sql
	# update table, changing values in particular columns
	UPDATE table SET col1 = val1, col2 = val2, ... 

	# update table, changing col1 to val1 where "name" equals "identifier"
	UPDATE table SET col1 = val1 WHERE identifier = "name" 
	```

- `DELETE`: Delete from table

	```sql
	# delete a row from table
	DELETE FROM table WHERE col = "identifier" 
	```