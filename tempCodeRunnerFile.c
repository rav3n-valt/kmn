#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>


#define ARRAY_SIZE 8


int main() 
{
    int arr[ARRAY_SIZE] = {1, 6, 2, 4, 5, 8, 9, 0};

    int pid = fork(); 

    if (pid == -1){ 
        perror("fork");
        exit(EXIT_FAILURE);
    } 
    else if (pid == 0) {        
        for (int i = 0; i < ARRAY_SIZE - 1; i++) {
            for (int j = i + 1; j < ARRAY_SIZE; j++){
                if (arr[i] > arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        exit(EXIT_SUCCESS);
    } else { 
        wait(NULL); 

        printf("Sorted array: ");
        for (int i = 0; i < ARRAY_SIZE; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    }
    return 0;
}
