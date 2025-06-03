// src/components/SignUpForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../schema';

export default function SignUpForm() {
  // 1) useForm 훅에 zodResolver를 넣어 “Zod 스키마 기반 검증” 활성화
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur', // onChange, onSubmit 등으로 바꿀 수 있음
  });

  // 2) 폼 제출 시 유효성을 통과한 데이터만 이 함수로 넘어옴
  const onValid = (data) => {
    console.log('검증된 데이터:', data);
    alert('가입 성공! 콘솔을 확인하세요.');
    reset(); // 제출 후 폼 초기화
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>회원가입 폼</h2>
      <form onSubmit={handleSubmit(onValid)}>
        {/* 사용자 이름 */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">이름</label>
          <br />
          <input
            id="username"
            type="text"
            {...register('username')}
            style={{ width: '100%', padding: 6 }}
          />
          {errors.username && (
            <p style={{ color: 'red', margin: 4 }}>{errors.username.message}</p>
          )}
        </div>

        {/* 이메일 */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">이메일</label>
          <br />
          <input
            id="email"
            type="email"
            {...register('email')}
            style={{ width: '100%', padding: 6 }}
          />
          {errors.email && (
            <p style={{ color: 'red', margin: 4 }}>{errors.email.message}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            id="password"
            type="password"
            {...register('password')}
            style={{ width: '100%', padding: 6 }}
          />
          {errors.password && (
            <p style={{ color: 'red', margin: 4 }}>{errors.password.message}</p>
          )}
        </div>

        {/* 나이 (옵션) */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="age">나이 (선택)</label>
          <br />
          <input
            id="age"
            type="number"
            {...register('age', { valueAsNumber: true })}
            style={{ width: '100%', padding: 6 }}
          />
          {errors.age && (
            <p style={{ color: 'red', margin: 4 }}>{errors.age.message}</p>
          )}
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isSubmitting ? '제출 중...' : '가입하기'}
        </button>
      </form>
    </div>
  );
}
