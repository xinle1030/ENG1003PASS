package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    Button player1Btn;
    Button player2Btn;
    Button resetBtn;
    TextView score1;
    TextView score2;
    TextView target;
    int targetScore;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        target = findViewById(R.id.target);
        targetScore = Integer.valueOf(target.getText().toString());

        score1 = findViewById(R.id.score1);
        score2 = findViewById(R.id.score2);

        player1Btn = findViewById(R.id.playerOne);
        player2Btn = findViewById(R.id.playerTwo);
        resetBtn = findViewById(R.id.resetBtn);

        player1Btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int player1Score = Integer.valueOf(score1.getText().toString()) + 1;
                score1.setText(String.valueOf(player1Score));
                if (checkMark(player1Score)){
                    score1.setTextColor(Color.GREEN);
                }
            }
        });

        player2Btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int player2Score = Integer.valueOf(score2.getText().toString()) + 1;
                score2.setText(String.valueOf(player2Score));
                if (checkMark(player2Score)){
                    score2.setTextColor(Color.GREEN);
                }
            }
        });

        resetBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                score1.setText("0");
                score2.setText("0");
                player1Btn.setEnabled(true);
                player2Btn.setEnabled(true);
                score1.setTextColor(Color.BLACK);
                score2.setTextColor(Color.BLACK);
            }
        });
    }

    public boolean checkMark(int score){
        if (score >= targetScore){
            player1Btn.setEnabled(false);
            player2Btn.setEnabled(false);
            return true;
        }
        return false;
    }
}