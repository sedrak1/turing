import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TuringMachine implements OnInit{
  result: string = ''
  mainFormGroup!: FormGroup
  mainArr: any[] = []
  positionIndex = 1
  breakIndicator = false
  steps = 0
  wearComplexity = 0
  waveComplexity = 0
  length = 0
  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void{
    this.mainFormGroup = this.fb.group({
      x: [1, [Validators.required]],
      y: [1, [Validators.required]],
      z: [1, [Validators.required]]
    })
  }

  onSubmit(){
    this.steps = 0
    this.result = ''
    this.mainArr = []
    this.positionIndex = 1
    this.breakIndicator = false
    this.waveComplexity = 0
    this.wearComplexity = 0
    this.createTuring(
      Number(this.mainFormGroup.get('x')?.value),
      Number(this.mainFormGroup.get('y')?.value),
      Number(this.mainFormGroup.get('z')?.value)
    )
  }

  createTuring(x: number,y: number,z: number) {

    if(z === 0){
      this.mainArr[0] = ''
      this.result = 'invalid input'
      return this.mainArr
    }
    this.waveComplexity += 2
    this.wearComplexity ++
    this.mainArr.push(' ')
    this.steps++
    for (let i = 0; i < x + 1; i++) {
      this.mainArr.push(1)
    }
    this.mainArr.push('+')

    for (let i = 0; i < y + 1; i++) {
      this.mainArr.push(1)
    }
    this.mainArr.push('*')
    for (let i = 0; i < z + 1; i++) {
      this.mainArr.push(1)
    }
    this.mainArr.push(' ')
    //q0
    this.mainArr[this.positionIndex] = ' '
    this.steps++
    this.positionIndex++
    //q1
    this.mainArr[this.positionIndex] = ' '
    this.steps++
    this.positionIndex++
    //q2
    this.mainArr[this.positionIndex] = 'b'
    this.steps++
    this.positionIndex++
    //q3
    while (true) {
      if (this.mainArr[this.positionIndex] === 1) {
        this.positionIndex++
        this.steps++

      }
      if (this.mainArr[this.positionIndex] === '*') {
        this.positionIndex++
        this.steps++
      }
      if (this.mainArr[this.positionIndex] === '+') {
        this.mainArr[this.positionIndex] = 1
        this.steps++
        this.positionIndex++
      }
      if (this.mainArr[this.positionIndex] === ' ') {
        this.positionIndex--
        this.steps++
        break
      }
    }

    //q4
    if (this.mainArr[this.positionIndex] === 1) {
      this.mainArr[this.positionIndex] = '='
      this.positionIndex--
      this.steps++
    }
    while (true) {
      //q5
      if (this.mainArr[this.positionIndex] === 1) {
        while (true) {
          if(this.mainArr[this.positionIndex] !== 1){
            break
          }
        this.mainArr[this.positionIndex] = 'a'
        this.positionIndex--
        this.steps++


          //q6
          while (true) {
            if (this.mainArr[this.positionIndex] === '*') {
              this.steps++
              this.positionIndex--
            }
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex--
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === 'b') {
              this.positionIndex++
              this.steps++
              break
            }
          }

          //q7
          if (this.mainArr[this.positionIndex] === '*') {
            this.mainArr[this.positionIndex] = 'b'
            this.positionIndex++
            this.steps++
            this.breakIndicator = true

            break
          }
          if (this.mainArr[this.positionIndex] === 1) {
            this.mainArr[this.positionIndex] = 'b'
            this.positionIndex++
            this.steps++
          }


          //q8
          while (true) {
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex++
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === '*') {
              this.positionIndex++
              this.steps++
            }


            if (this.mainArr[this.positionIndex] === 'a') {
              this.mainArr[this.positionIndex] = 1
              this.positionIndex--
              this.steps++
              break
            }
          }
          this.waveComplexity += 2
          this.wearComplexity += 2

        }
      }
      if (this.breakIndicator){
        break
      }
      //q5
      if (this.mainArr[this.positionIndex] === '*') {
        this.positionIndex--
        this.steps++
        while (true) {

          //q9
          while (true) {
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex--
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === 'b') {
              this.positionIndex--
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === ' ') {
              this.positionIndex++
              this.steps++
              break
            }
          }
          //q10
          while (true) {
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex++
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === 'b') {
              this.mainArr[this.positionIndex] = 1
              this.positionIndex++
              this.steps++
              break
            }
          }
          //q11
          while (true) {
            if (this.mainArr[this.positionIndex] === 'b') {
              this.positionIndex++
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex++
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === '*') {
              this.positionIndex++
              this.steps++
            }
            if (this.mainArr[this.positionIndex] === '=') {
              this.positionIndex--
              this.steps++
              break
            }
          }
          this.waveComplexity += 2
          this.wearComplexity += 2

          break
        }
      }
    }

    //q12

    while (true){

      if (this.mainArr[this.positionIndex] === 'a') {
        this.mainArr[this.positionIndex] = 'b'
        this.positionIndex++
        this.steps++
      }

      if (this.mainArr[this.positionIndex] === 1) {
        this.mainArr[this.positionIndex] = 'b'
        this.positionIndex++
        this.steps++
      }

      if (this.mainArr[this.positionIndex] === '=') {
        this.mainArr[this.positionIndex] = ' '
        this.positionIndex--
        this.steps++
        break
      }
    }

    //q13

    while (true){

      if (this.mainArr[this.positionIndex] === 1) {
        this.positionIndex--
        this.steps++
      }

      if (this.mainArr[this.positionIndex] === 'b') {
        this.mainArr[this.positionIndex] = ' '
        this.positionIndex--
        this.steps++
      }

      if (this.mainArr[this.positionIndex] === ' ') {
        this.mainArr[this.positionIndex] = 1
        this.mainArr.map(el => this.result += el)

        this.waveComplexity += 3
        this.wearComplexity += 3
        this.length = x + y + z + 5
        return this.mainArr
      }
    }
    //q14
  }


}
