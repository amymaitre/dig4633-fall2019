using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LMScript : MonoBehaviour
{
    public bool appleOne = false;
    public bool appleTwo = false;
    public bool appleThree = false;




    public GameObject finsihText;


    public void checkForVictory()
    {
        if (appleOne && appleTwo && appleThree)
        {
            finsihText.SetActive(true);
        }

    }




    public void putAppleOneIn()
    {
        this.appleOne = true;
        checkForVictory();
    }

    public void putAppleTwoIn()
    {
        this.appleTwo = true;
        checkForVictory();
    }

    public void putAppleThreeIn()
    {
        this.appleThree = true;
        checkForVictory();
    }
}
