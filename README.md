 # React-native-Facebook-Integration

### FB integration in android

* Follow the steps below for installation of plugins and its associates.

###Installation Setup for android 

* The most important perspective is to get the keyhash and Facebook appID from this [link](https://developers.facebook.com).
 
* Before that you have to login to facebook from [fblogin](https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2F)

* Then create a new  app from myapps tab

* Create a keykash [here](https://developers.facebook.com/docs/android/getting-started) by setting a Release Key Hash header

* After that click on your app and the go to settings to upload your 25 alphanumeric android key

* Follow this [link](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) to download puTTygen

* Avoid getting  android key from command prompt ,  because this will allow the app to install only once . After then it will show invalid hash key(mismatch  in keyhash occurs)

* Then proceed with the following steps

### Installation of Facebook package through npm

      //run the following command
   
      npm install --save react-native-facebook-login

###Step 1-Update Gradle settings


     // file: android/settings.gradle
       ...

    include ':react-native-facebook-login'
    project(':react-native-facebook-login').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-facebook-login/android')

###Step 2-Update Gradle Build

    // file: android/app/build.gradle
    ...

    dependencies {
     ...
    compile project(':react-native-facebook-login')
    }
 
###Step 3 - Register React Package and Handle onActivityResult    

    ...
    import com.magus.fblogin.FacebookLoginPackage; // <--- import

    public class MainActivity extends ReactActivity {

    ...

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FacebookLoginPackage() // <------ add the package
        );
    }
    ...
    }

###Step 4 - Add Facebook App ID to String resources

    <resources>
       <string name="app_name">your-app-name</string>
        <string name="fb_app_id">your-fb-app-id</string>
    </resources>

###Step 5 - update AndroidManifest

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.your.app.namespace">

    ...

    <application
            android:allowBackup="true"
            android:label="@string/app_name"
            android:icon="@mipmap/ic_launcher"
            android:theme="@style/AppTheme">
        ...

        <!--add FacebookActivity-->
        <activity
                android:name="com.facebook.FacebookActivity"
                android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
                android:label="@string/app_name"
                android:theme="@android:style/Theme.Translucent.NoTitleBar"/>

        <!--reference your fb_app_id-->
        <meta-data
                android:name="com.facebook.sdk.ApplicationId"
                android:value="@string/fb_app_id"/>

    </application>

</manifest>

###Step 6 - include in Javascript

    var {NativeModules} = require('react-native');
    var FBLogin = require('react-native-facebook-login');
    var FBLoginManager = NativeModules.FBLoginManager; //<= if needed
    
###Output Screenshot

![GitHub Logo](/outmain.png)

![GitHub Logo](/Loginfb.png)

![GitHub Logo](/Fbauth.png)

![GitHub Logo](/Fblogout.png)

Check this [link](http://g.recordit.co/pDJkcqdSKx.gif) for demo
   //
