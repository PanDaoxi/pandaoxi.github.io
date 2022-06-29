<font face="Consolas"><i>

# Self-Introduction
Hi, my name is Pan Daoxi. This is my [home page](https://pandaoxi.github.io/).
I come from Hebei, China. I am a sixth grade primary school student. I am 13 years old and love programming technology.
I like to write C++, Python and windows batch. I hope to help more people with programs. At present, I am a student of Informatics competition.

I have my own **blog (On CSDN)** : <u>[click here.](https://pandaoxi.blog.csdn.net/)</u>
I also have my own **video account (On Bilibili)** : <u>[click here.](https://space.bilibili.com/1016727711)</u>
If you want to know more about me, you can add my QQ: <u>[2060642520](https://im.qq.com/index)</u>. 
Or send an email to: <u>[pandaoxi@qq.com](http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=6NrY3tje3Nrd2tiomZnGi4eF)</u>.

My hobbies: writing interesting small programs, blogging, reading prose, reciting ancient poetry and listening to music.
I hope more people can benefit from my blog. In the video account, I hope you can understand my life.
I’m about to enter middle school. I may spend less energy on programming. I’ll try to keep my blog and video updated.

My famous projects are as follows:

```
Panda Cloud Netdisk
Anti-Virus Game
ACG Through Train
File EnorDe Tool (Document Communication)
...
```
My achievements:

> (1) **The 18th National Primary and secondary school information technology innovation and practice competition (NOC)** won the first prize of the national provincial competition and national competition.
(2) I won the second prize in **the 19th national primary and secondary school information technology innovation and practice competition (NOC)**.
![NOC](https://img-blog.csdnimg.cn/img_convert/5b2ceca8a82a3cbb7431e3da78b2944a.png)
(3) **Microsoft Technical Assistant (MTA)** passed the competition.
![MTA](https://img-blog.csdnimg.cn/14b8fee3069b4e8a99eb1112721f3805.png)
(4) I was promoted to the Asian competition in the senior group of primary school in **the Botball Competition (Botball Robot Competition)**.
![Botball](https://img-blog.csdnimg.cn/205909282d5144ff92d706afb34d8e2a.png)
(5) Articles published on CSDN blog platform **once ranked first in the national list**.
(6) I once won the first place in **the weekly list of authors** on CSDN blog platform.
![CSDN](https://img-home.csdnimg.cn/images/20201124032511.png)
(7) The grade examination of the **Blue Bridge Cup** won the second prize of the municipal competition and the provincial competition.
![BlueBridge](https://img-blog.csdnimg.cn/710d27d48b7a49a1b04914e50a9a4416.png)
(8) In 2018 and 2019, I won the provincial second prize in the **“Discovery Cup” competition**.
![DiscoveryCup](https://img-blog.csdnimg.cn/a43b1016f3f64bd88b8c0bd7988d129d.png)

# Code Style Display

Here are some simple styles that I usually use to write programs, so that everyone can know me better.

## Python
**From a project *Tool Module* **
```python
class Math():
    def __init__(self):
        self.__tempList = []
        self.__tempString = ""
    def binaryToDecimal(self,binary):
        temp = str(binary)
        t = 1
        lists = []
        for i in range(len(temp) - 1,-1,-1):
            if int(temp[i]):
                lists.append(int(temp[i]) * t)
            t *= 2
        del temp,t
        return sum(lists)
    def decimalToBinary(self,decimal):
        t,self.__tempString = decimal,""
        while t != 0:
            self.__tempString = str(t % 2) + self.__tempString
            t = int(t / 2)
        del t
        return self.__tempString
    def numberOnDigit(self,number):
        t,temp = number,[]
        while t != 0:
            self.__tempList.append(t % 10)
            t = int(t / 10)
        for i in range(len(self.__tempList) - 1,-1,-1):
            temp.append(self.__tempList[i])
        self.__tempList = temp
        del temp,t
        return self.__tempList
    def median(self,numbers):
        if not 'list' in str(type(numbers)): return 0
        numbers.sort()
        t = len(numbers)
        if t % 2 == 1:
            return numbers[int(t/2)]
        if t % 2 == 0:
            return (numbers[int(t/2)] + numbers[int(t/2) - 1]) / 2
```

## C++
**From an *[explanation of my question](https://blog.csdn.net/PanDaoxi2020/article/details/122855628). * **
```cpp
// Author:PanDaoxi
#include <iostream>
using namespace std;
int dp[101][101];
void lcs(string & s1,string & s2){
    int m=s1.size();
    int n=s2.size();
    s1="#"+s1;
    s2="#"+s2;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(s1[i]==s2[j]) dp[i][j]=dp[i-1][j-1]+1; 
            else dp[i][j]=max(dp[i-1][j],dp[i][j-1]);     
        }
    } 
    cout<<dp[m][n]<<endl;
} 
int main(){
    string s1,s2;
    cin>>s1>>s2;
    lcs(s1,s2); 
    return 0;
}
```
## Windows Batch
**From a *[computer personalized applet.](https://www.bilibili.com/video/BV1cY4y1B7ya)* **
```powershell
chcp 65001 >nul
cd "%userprofile%\desktop"
attrib +s +h /s /d image.jpg
attrib +s +h /s /d icon.ico
attrib +s +h /s /d test.ico
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v "Wallpaper" /f /d "%userprofile%\desktop\image.jpg"
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v "WallpaperStyle" /f /d "2"
reg add "HKCR\exefile\DefaultIcon" /f /d "%userprofile%\desktop\icon.ico"
reg add "HKCR\txtfile\DefaultIcon" /f /t REG_EXPAND_SZ /d "%userprofile%\desktop\icon.ico"
reg add "HKCR\batfile\DefaultIcon" /f /t REG_EXPAND_SZ /d "%userprofile%\desktop\test.ico"
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\System" /f /v DisableRegistryTools /t REG_DWORD /d 00000001
taskkill /im explorer.exe /f & explorer
```

# About Us
Here is some information about us. If you need it, you can check it.
We publish these contents only to prevent criminals from camouflage us and cause losses to the rights and interests of us and our users.

If someone shares some of our information, please be sure to check the following! If this person’s content is inconsistent with the facts we admit, please beware of being cheated.

## About Our Contact Information
> E-mail: `pandaoxi@qq.com` and `2060642520@qq.com` ;
QQ: `2060642520` and `3377063617` ;
Wechat: `pandaoxi2021` ;

## About Our Websites
We have some websites. What you are visiting is the page under the main site.
Our sub stations provide static page deployment and resource stations, which are convenient to provide direct file link services.

### Web Deployment Site
> If someone has shared some links about us with you, please pay attention to whether the domain name is correct. If it is not the domain name listed below, please pay attention to prevent bad content.

This is our main site. `https://pandaoxi.github.io/` [(Click here to visit the site.)](https://pandaoxi.github.io/)
Static server 1: `https://pandaoxis.github.io/` [(Click here to visit the site.)](https://pandaoxis.github.io/)
Static server 2: `https://pandaoxi2021.github.io/` [(Click here to visit the site.)](https://pandaoxi2021.github.io/)
Static server 3: `https://pandaoxiweb.github.io/` [(Click here to visit the site.)](https://pandaoxiweb.github.io/)

### Resource Station (file storage station)
This is our main site. `https://pandaoxi.coding.net/public/pandaoxi/PanDaoxi/git/files` [(Click here to visit the site.)](https://pandaoxi.coding.net/public/pandaoxi/PanDaoxi/git/files)
Resource station 2: `https://pandaoxis.coding.net/public/pdxres/pdxres/git/files` [(Click here to visit the site.)](https://pandaoxis.coding.net/public/pdxres/pdxres/git/files)
Resource station 3: `https://newpdx.coding.net/public/laopan/laopan/git/files` [(Click here to visit the site.)](https://newpdx.coding.net/public/laopan/laopan/git/files)

---
**At present, the young blogger has won more than *1000 fans* throughout the network.**
