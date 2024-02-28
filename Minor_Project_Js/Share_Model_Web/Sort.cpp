#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main()
{
  vector<int> Arr = {1, 4, 1, 5, 5};
  sort(Arr.begin(), Arr.end());
  for(auto i : Arr)
  {
    cout << i << ", ";
  }
  cout << endl;

  return 0;
}
