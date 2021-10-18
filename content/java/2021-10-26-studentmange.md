---
layout: post
current: post
cover:  assets/built/images/java/java.jpg
navigation: True
title: 학사관리프로그램
date: 2021-10-26 19:50
tags: [java]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>


<br>

<strong class="subtitle_fontAwesome">시작전</strong>

<strong class="subtitle2_fontAwesome">생각</strong>

<strong>필요한 클래스를 먼저 생각하기</strong>

main메소드가 있는 학사관리 시스템 클래스, &#160; 학생정보를 가지고있는 클래스가 있어야한다. &#160;그리고 재적학생들만 따로 관리하는 클래스

학사관리는 학생을 관리하는 시스템이므로 학생 한명 한명마다의 클래스가 있어야한다

그래야 학생 한명 한명마다 클래스로부터 학생 객체가 생성되어 나올것임

학생 클래스에는 이름, &#160;나이,&#160; 학번,&#160; 전공, &#160;성별 등 데이터가 포함되어있고 데이터를 언제든지 업데이트 할 수 있어야한다

이때 데이터니까 클래스 안에 인스턴스변수로 만들면되겠고 업데이트 하는 기능부분은 메소드로 작성

<br>

<strong class="subtitle2_fontAwesome">학생정보</strong>

일단 Student 클래스에 들어가서 학생에 관한 정보를 입력

~~~java
public class Student {
	private String name;
	private int age;
	private int studentNum;
	private String major;
	
	public Student(String name, int age, int studentNum, String major) {
		this.name = name;
		this.age = age;
		this.studentNum = studentNum;
		this.major = major;
	}
}
~~~

그리고 파라미터로 학생의 정보들을 받는 생성자를 만들어줌

학생의 정보를 업데이트 할때 사용할 메소드를 만들어준다

~~~java
public void updateInfo(int i, String info) {
	switch (i) {
		case 1 :
			this.setName(info);
			break;
		case 2 :
			this.setAge(Integer.parseInt(info));
			break;
		case 3 :
			this.setStudentNum(Integer.parseInt(info));
			break;
		case 4 :
			this.setMajor(info);
	}
}
~~~

예를들어 이름을 변경하고 싶으면 파라미터 값으로 1을 넣고 변경된 이름을 넣으면 정보가 변경된다

그리고 인스턴스 데이터에 대한 getter setter들을 적어주면 된다

~~~java
public String getName() {
		return this.name;
}
public void setName(String name) {
	this.name = name;
}
public int getAge() {
	return this.age;
}
public void setAge(int age) {
	this.age = age;
}
public int getStudentNum() {
	return this.studentNum;
}
public void setStudentNum(int studentNum) {
	this.studentNum = studentNum;
}
public String getMajor() {
	return this.major;
}
public void setMajor(String major) {
	this.major = major;
}
~~~

이 내용들이 전부 학생 한명 한명마다 생성되는 객체

외부에서 new해서 Student해서 파라미터 4개를 넣어주면 그 값에 해당되는 학생 1명이 생성된다

<br>

<strong class="subtitle2_fontAwesome">제적된 학생</strong>


~~~java
import java.util.ArrayList;

public class StudentExpel {
	
	ArrayList<Student> expelStudents;

	public StudentExpel() {
		expelStudents = new ArrayList();
	}

	public void addExpelStuduent(String name, int age, int studentNum, String major) {
		this.expelStudents.add(new Student(name, age, studentNum, major));
	}
}
~~~

ArrayList는 배열이라고 생각하면 된다. &#160; expelStudents라는 ArrayList 배열을 사용하겠다 라고 선언

이 클래스로 객체를 만들때 바로 생성되도록 안에서 초기화시켜줌

배열 안에 저장되어있는 데이터의 타입은 Student, &#160; Student 객체들이 담겨질 수 있는 배열

그리고 이름과 나이, &#160; 학번, &#160;전공을 넣어주면 ArrayList 안에 하나씩 하나씩 학생이 추가됨

왜 new 다음 Student 객체를 만드냐하면 배열에 저장되어있는 데이터타입을 Student로 했기때문에 Student 객체로 만들어야지 타입이 동일하게 되서 배열 안에 데이터가 차곡차곡 정리가됨

<br>

<strong class="subtitle2_fontAwesome">학생 매니저(메인)</strong>

~~~java
public class StudentManager {
	
	ArrayList<Student> students = new ArrayList();
	StudentExpel studentExpel = new StudentExpel();

	public static void main(String[] args) {
		
		StudentManager studentManager = new StudentManager();
		
		studentManager.addStudent("홍길동", 22, 20123487, "영극영화");
		studentManager.addStudent("홍길순", 24, 20106428, "수학과");
		studentManager.addStudent("이은경", 21, 20135788, "국문과");
		studentManager.addStudent("김철수", 23, 20114221, "체육과");
		studentManager.addStudent("김순희", 26, 20089883, "무용과");
	}

	private void addStudent(String name, int age, int studentNum, String major) {
		this.students.add(new Student(name, age, studentNum, major));
		
		System.out.println(name + " 학생 정보 입력 성공!!");
	}
}
~~~

StudentManager 클래스를 이용해 객체를 만들고 객체에다가 addStudent메소드를 이용해 이름, &#160; 나이, &#160; 학번, &#160; 전공 등을 넣어줌

addStudent메소드를 보면 students라는 ArrayList 배열에 하나씩 추가해줌

~~~java
this.students.add(new Student(name, age, studentNum, major));
~~~

이걸 풀어 쓰면

~~~java
Student student = new Student(name, age, studentNum, major);
students.add(student);
~~~

만들어진 student 객체가 students ArrayList 배열에 추가됨

<strong>설명</strong>

addStudent에서 파라미터 name에 홍길동 age, 학번 등등 정보를 주고 Student객체(학생 한명 한명 만드는것)를 만들어서 그것을 ArrayList 배열에 하나씩 하나씩 넣어준것
