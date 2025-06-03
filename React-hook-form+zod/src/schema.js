// src/schema.js
import { z } from 'zod';

/**
 * Zod로 회원가입 폼 데이터의 기본 검증 규칙을 정의합니다.
 * - username: 문자열, 최소 2글자
 * - email: 문자열, 이메일 형식
 * - password: 문자열, 최소 6글자
 * - age: 숫자(정수), 양수여야 하고, 입력하지 않아도 된다(optional)
 */
export const signUpSchema = z.object({
  username: z.string().min(2, '이름은 최소 2글자 이상 입력해주세요.'),

  email: z.string().email('유효한 이메일 형식이어야 합니다.'),

  password: z.string().min(6, '비밀번호는 최소 6글자 이상이어야 합니다.'),

  age: z
    .number({ invalid_type_error: '나이는 숫자로 입력해주세요.' })
    .int('나이는 정수여야 합니다.')
    .positive('양수만 입력 가능합니다.')
    .optional(),
});
