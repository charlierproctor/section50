## CHMOD

- a unix system call that changes the access permissions of file system objects (like directories, files, images, etc).
- `ls -l` shows you the:
	- permissions
	- number of hard links (ignore)
	- owner name
	- group name
	- size in bytes
	- date last modified
	- filename

![](data/md/7/chmod.png)

- on the far left, we see the file permissions:

![](data/md/7/permissions.jpg)

- to change permissions, we use `chmod NUM FILENAME`
	- `NUM` is a three digits. Each digit is octal value of permission bits.
	- `chmod 444 file` makes `file` readable to everyone.
	- can also do `chmod a+r file` to add read permissions for everyone
- common permissions (for web dev):
	- `711` - any directory
	- `644` - any non-PHP file 
	- `600` - any PHP file
	