/* Comparison between two strings without using
predefined function */
#include<stdio.h>
#include<string.h>

int main(){
    int i, flag=0;
    char str1[30];
    char str2[30];

    printf("Enter First String:");
    fgets(str1, sizeof(str1), stdin);

    printf("Enter Second String:");
    fgets(str2, sizeof(str2), stdin);

    while(str1[i]!='\0' || str2[i]!='\0'){
        if(str1[i]!=str2[i])
        {
            flag=1;
            break;
        }
            i=i+1;
    }
    if(flag==1)
    printf("Both strings are different");
    else
    printf("Both are same strings");
    return 0;
}


