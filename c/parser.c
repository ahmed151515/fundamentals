#include "compiler.h"

/*
change child paramter to root for link parser tree
*/
ExpressionNode *create_expression_node(Token token, ExpressionNode *root)
{
	ExpressionNode *node = (ExpressionNode *)malloc(sizeof(ExpressionNode));
	if (node == NULL)
	{
		perror("Failed to allocate memory for ExpressionNode");
		exit(EXIT_FAILURE);
	}
	if (root != NULL)
	{
		root->child = node;
	}
	node->token = token;
	node->next = NULL;
	node->child = NULL;
	return (node);
}

// change next paramter to prev for link  tokens
TokenNode *create_token_node(Token token, TokenNode *prev)
{
	TokenNode *node = (TokenNode *)malloc(sizeof(TokenNode));
	if (node == NULL)
	{
		perror("Failed to allocate memory for TokenNode");
		exit(EXIT_FAILURE);
	}

	node->token = token;
	node->next = NULL;
	if (prev != NULL)
	{
		prev->next = node;
	}

	return (node);
}

/**
 * parser -
 */
void parser()
{
}
void parse_return()
{
	int start_token = TokenIndex;
	if (TokenIndex >= TokenCount)
	{
		fprintf(stderr, "Error: Reached end of tokens :')\n");
		return;
	}

	if (strcmp(tokens[TokenIndex].value, "return") == 0)
	{
		TokenIndex++;

		if (TokenIndex >= TokenCount)
		{
			fprintf(stderr, "Error: Unexpected end of tokens :')\n");
			return;
		}

		if (strcmp(tokens[TokenIndex].value, "(") == 0)
		{
			TokenIndex++;

			if (TokenIndex >= TokenCount)
			{
				fprintf(stderr, "Error: Unexpected end of tokens :')\n");
				return;
			}

			if (tokens[TokenIndex].type == TOKEN_LITERAL_INT)
			{
				TokenIndex++;

				if (TokenIndex >= TokenCount)
				{
					fprintf(stderr, "Error: Unexpected end of tokens :')\n");
					return;
				}

				if (strcmp(tokens[TokenIndex].value, ")") == 0)
				{
					TokenIndex++;

					if (TokenIndex >= TokenCount)
					{
						fprintf(stderr, "Error: Unexpected end of tokens :')\n");
						return;
					}

					if (strcmp(tokens[TokenIndex].value, ";") == 0)
					{
						TokenIndex++;
						ExpressionNode *child;
						TokenNode *cur;
						TokenNode *prev;

						Token token_exit = {EXIT, "EXIT"};
						child = create_expression_node(token_exit, root);
						child->next = create_token_node(tokens[start_token], NULL);
						prev = child->next;
						for (int i = start_token + 1; i < TokenIndex; i++)
						{
							cur = create_token_node(tokens[i], prev);
							prev = cur;
						}
						printf("Correct Return Statment horaaaaay!!\n");
						return;
					}
				}
			}
		}
	}

	fprintf(stderr, "Syntax Error: Invalid Return Statment :')\n");
}

void parse_main()
{
	if (TokenIndex >= TokenCount)
	{
		fprintf(stderr, "Error: Reached end of tokens :')\n");
		return;
	}

	if (strcmp(tokens[TokenIndex].value, "int") == 0)
	{
		TokenIndex++;

		if (TokenIndex >= TokenCount)
		{
			fprintf(stderr, "Error: Reached end of tokens :')\n");
			return;
		}

		if (strcmp(tokens[TokenIndex].value, "main") == 0)
		{
			TokenIndex++;

			if (TokenIndex >= TokenCount)
			{
				fprintf(stderr, "Error: Reached end of tokens :')\n");
				return;
			}

			if (strcmp(tokens[TokenIndex].value, "(") == 0)
			{
				TokenIndex++;

				if (TokenIndex >= TokenCount)
				{
					fprintf(stderr, "Error: Reached end of tokens :')\n");
					return;
				}

				if (strcmp(tokens[TokenIndex].value, ")") == 0)
				{
					printf("Correct main Statment horaaaaay!!\n");
					return;
				}
			}
		}
	}
}