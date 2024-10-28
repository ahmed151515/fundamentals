.global main
.section .text
.intel_syntax noprefix

main:
    mov rax, 60
    mov rdi, 69
    syscall

