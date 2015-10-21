Jump Table is more expensive, so only use when using large amounts of cases.

### Pointers in assembly:
	jmp *.L57(, %eax, 4)

go to the jump table at %eax*4 because you're holding address within a table that you're also referencing.


### .L57:
	.long .L51 #Op = 0 (shares same line address as .L57)
	.long .L52 #Op = 1
	.long .L53 #Op = 2
	.long .L54 #Op = 3
	.long .L55 #Op = 4
	.long .L56 #Op = 5

### Caller Save:
eax
edx
ecx

### Callee Save
ebx
esi - string manip
edi

### Special
esp - top of stack pointer
ebp - frame pointer

### RECURVSIVE FACTORIAL:

```
int rfact(int x) {

int rval;
if(x <= 1)
	return 1;
rval = rfact(x-1);
return rval * x;

}
```
```
rfact, @function #
rfact:
	pushl %ebp # pushes old ebp, stores the address
	movl %esp, %ebp # moves pointer to top of stack
	pushl %ebx # by convention you're supposed to save the value of ebx before it
	gets called because it's callee safe
	movl 8(%ebp), %ebx #clobber ebp with the value of x (%ebx)
	cmpl $1, %ebx #compares the var to 1, cc gets set
	jle .L78 # reads the condition code and jumps to L78 (jumps less than or equal to and value is 2 in this case)
	leal -1(%ebx), %eax # sets eax to 1, we dont have to do the thing where you save the value before it's called because it's caller safe, meaning it's the job of the person who called the function
	pushl %eax # pushes it on to the stack for the next recursive call
	call rfact # calls rfact with the value of 1 in eax
	imull %ebx %eax #the place where the ret goes to and does the actual multiplication statement
	jmp .L79 #
	.align 4

.L78:
	movl $1, %eax #stores one in eax, catches if the number is 1 or less

.L79: #hitting base case and returning old ebp's
	movl -4(%ebp), %ebx
	movl %ebp, %esp
	popl %ebp
	ret # goes to the top of the stack that holds the address to the latest recursive statement. and goes to the function that called it
```

### REGISTER TRANSFER SOMETHING
RT

transitors etc

## Transistors 'n like circuits 'n shit

Parallel: Either can be on.
Series: Both need to be on.

**DeMorgan's Law:** AB and and them and take the nand of them, functionally the same as the notA + notB

So:

```
notAB = notA + notB
```

**Minterm:** Boolean expression resulting in 1 for the output of a single cell and 0s for ll other cells in a truth table.

```
M1 = notABC => notABC + AnotBC + ABnotC + ABC
M2 = AnotBC
M3 = ABnotC
M4 = ABc
```

