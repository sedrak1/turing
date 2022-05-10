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
    console.log(this.mainArr, this.mainFormGroup.value)
    this.result = ''
    this.mainArr = []
    this.positionIndex = 1
    this.breakIndicator = false
    this.createTuring(
      Number(this.mainFormGroup.get('x')?.value),
      Number(this.mainFormGroup.get('y')?.value),
      Number(this.mainFormGroup.get('z')?.value | 1)
    )
  }

  createTuring(x: number,y: number,z: number) {
    console.log(x,y, z)
    if(z === 0){
      this.mainArr[0] = ''
      return this.mainArr
    }
    this.mainArr.push(' ')
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
    this.positionIndex++
    //q1
    this.mainArr[this.positionIndex] = ' '
    this.positionIndex++
    //q2
    this.mainArr[this.positionIndex] = 'b'
    this.positionIndex++
    //q3
    while (true) {
      if (this.mainArr[this.positionIndex] === 1) {
        this.positionIndex++
      }
      if (this.mainArr[this.positionIndex] === '*') {
        this.positionIndex++
      }
      if (this.mainArr[this.positionIndex] === '+') {
        this.mainArr[this.positionIndex] = 1
        this.positionIndex++
      }
      if (this.mainArr[this.positionIndex] === ' ') {
        this.positionIndex--
        break
      }
    }

    //q4
    if (this.mainArr[this.positionIndex] === 1) {
      this.mainArr[this.positionIndex] = '='
      this.positionIndex--
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


          //q6
          while (true) {
            if (this.mainArr[this.positionIndex] === '*') {
              this.positionIndex--
            }
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex--
            }
            if (this.mainArr[this.positionIndex] === 'b') {
              this.positionIndex++
              break
            }
          }

          //q7
          if (this.mainArr[this.positionIndex] === '*') {
            this.mainArr[this.positionIndex] = 'b'
            this.positionIndex++
            this.breakIndicator = true

            break
          }
          if (this.mainArr[this.positionIndex] === 1) {
            this.mainArr[this.positionIndex] = 'b'
            this.positionIndex++
          }


          //q8
          while (true) {
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex++
            }
            if (this.mainArr[this.positionIndex] === '*') {
              this.positionIndex++
            }
            if(x > 20){
              return
            }


            if (this.mainArr[this.positionIndex] === 'a') {
              this.mainArr[this.positionIndex] = 1
              this.positionIndex--
              break
            }
          }
          x++


        }
      }
      if (this.breakIndicator){
        break
      }
      //q5
      if (this.mainArr[this.positionIndex] === '*') {
        this.positionIndex--
        while (true) {

          //q9
          while (true) {
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex--
            }
            if (this.mainArr[this.positionIndex] === 'b') {
              this.positionIndex--
            }
            if (this.mainArr[this.positionIndex] === ' ') {
              this.positionIndex++
              break
            }
          }
          //q10
          while (true) {
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex++
            }
            if (this.mainArr[this.positionIndex] === 'b') {
              this.mainArr[this.positionIndex] = 1
              this.positionIndex++
              break
            }
          }
          //q11
          while (true) {
            if (this.mainArr[this.positionIndex] === 'b') {
              this.positionIndex++
            }
            if (this.mainArr[this.positionIndex] === 1) {
              this.positionIndex++
            }
            if (this.mainArr[this.positionIndex] === '*') {
              this.positionIndex++
            }
            if (this.mainArr[this.positionIndex] === '=') {
              this.positionIndex--
              break
            }
          }
          break
        }
      }
    }

    //q12

    while (true){

      if (this.mainArr[this.positionIndex] === 'a') {
        this.mainArr[this.positionIndex] = 'b'
        this.positionIndex++
      }

      if (this.mainArr[this.positionIndex] === 1) {
        this.mainArr[this.positionIndex] = 'b'
        this.positionIndex++
      }

      if (this.mainArr[this.positionIndex] === '=') {
        this.mainArr[this.positionIndex] = ' '
        this.positionIndex--
        break
      }
    }

    //q13

    while (true){

      if (this.mainArr[this.positionIndex] === 1) {
        this.positionIndex--
      }

      if (this.mainArr[this.positionIndex] === 'b') {
        this.mainArr[this.positionIndex] = ' '
        this.positionIndex--
      }

      if (this.mainArr[this.positionIndex] === ' ') {
        this.mainArr[this.positionIndex] = 1
        this.mainArr.map(el=> this.result += el)
        console.log(this.mainArr)
        return this.mainArr
      }
    }
    //q14
  }


}
