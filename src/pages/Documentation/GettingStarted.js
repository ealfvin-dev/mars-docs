import React from 'react';
import Header from '../../components/Header/Header';

import '../pages.css';

function GettingStarted() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <h2>Getting Started</h2>
                    <h3>1. Install</h3>
                    <p>
                        Copy the Mars-Dist folder onto a safe place on your computer. This should be somewhere
                        that is not often used to avoid accidental corruption, ie., not the desktop.
                    </p>
                    <h3>2. Move shortcut</h3>
                    <p>
                        In the Mars-Dist folder there is a shortcut file called Mars - Shortcut.lnk.
                        This is the file that should be used to run the Mars application. Move this shortcut
                        out of the Mars-Dist folder and onto the desktop or another easily accessible location.
                        It is recommended not to run Mars from the original Mars-Dist folder since the folder
                        also contains important files that the program needs to run.
                    </p>
                    <p>
                        If you need to create a new shortcut to the executable, it is found at Mars-Dist/dist/Mars/Mars.exe.
                    </p>
                    <h3>3. Edit default file path</h3>
                    <p>
                        Open Mars by double clicking on the shortcut. Once the internal tests have run you should see the home screen.
                        There is only one piece of setup to do that will make life easier when running files and that is to
                        edit the default file path. You will be opening configuration files from your local file system in Mars
                        and the default file path is just the location in your file system that Mars will start the file navigation at.
                        This can always be edited again later.
                    </p>
                    <p>
                        Clicking on the <em>Settings</em> tab in the upper right will bring up the settings popup.
                    </p>
                    <img src={require('./Images/DefaultFilePath.jpg')} width='400px' alt="Mars settings popup" />
                    <br/>
                    <p>
                        Click on <em>Choose</em> next to Default File Path and a file navigation menu will appear.
                    </p>
                    <img src={require('./Images/DefaultFilePathSelect.jpg')} width='650px' alt="Mars settings popup" />
                    <p>
                        Use the ../ to move up in the file system, once you land at the location where you want future
                        file navigations to begin, click <em>Select</em> and then <em>Save</em> in the Settings menu.
                        That's it, you're ready to use the program!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GettingStarted;
