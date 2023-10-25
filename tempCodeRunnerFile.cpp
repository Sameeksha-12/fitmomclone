#include<iostream>
#include<climits>
using namespace std;
//first negative integer in every window of size k

int main(){
    int n = 8;
    int arr[] = {12,-1,-7,8,-15,30,16,28}
    

    int j=0;
    while(j<n){
        int i=0;
    
        int k = 3;
        if(j-i+1<k){
            j++;
        }
        else if(j-i+1==k){
            for(int m=i;m<j;m++){
                if(arr[m]<0){
                    cout<<arr[m]<<" ";
                    break;
                }
            }

            i++;
            j++;
        }
    }




    return 0;

}